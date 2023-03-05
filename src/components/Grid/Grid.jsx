import React, { useState, useEffect } from "react";
import Image from "next/image";

import Button from "../Button/Button";
import styles from "./Grid.module.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import DynamicTextarea from "../ReactQuill/DynamicTextarea";
import axios from "axios";
import dynamic from "next/dynamic";
import html2canvas from "html2canvas";
import { Limelight } from "next/font/google";
const Grid = () => {
  const [colorSelected, setColor] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [message, setMessage] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [upload, setUpload] = useState(false);

  //   colors
  const colors = [
    "#dff6e8",
    "#bcc7f4",
    "#bbf0f4",
    "#dbf4b5",
    "#adf7b6",
    "#FFEE93",
    "#FFC09F",
    "#f4aed6",
  ];

  //   message
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6] }],
        [{ size: ["extra-small", "small", "medium", "large"] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ align: [] }],
        [{ color: [] }, { background: [] }],
        ["link", "image"],
      ],
    },
  };

  const onChangeMessage = (e) => {
    setMessage(e);
  };

  // theme
  const handleThemeChange = (event) => {
    console.log(event.target.value);
    setSelectedTheme(event.target.value);
  };

  // images
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  useEffect(() => {
    const fetchImages = async () => {
      const result = await axios.get(
        `https://api.unsplash.com/search/photos?query=${selectedTheme}&client_id=Qk5qEPK9_0WY3JOkbPJ-nu5VowgjTuSnJX-XcRVlDe4`
      );
      setImages(result.data.results);
    };
    fetchImages();
  }, [selectedTheme]);

  const handleSelectImage = (image) => {
    setSelectedImage(image);
  };

  // upload
  const handleDownload = (e) => {
    if (imageLoaded) {
      e.preventDefault();
      const content = document.getElementById("content");

      html2canvas(content, {
        useCORS: true,
        allowTaint: true,
        logging: true,
      }).then((canvas) => {
        const link = document.createElement("a");
        link.download = "image.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
      setUpload(true);
    }
  };
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <form className={styles.container}>
        {/* COLOR */}
        <div className={styles.colorTitle}>
          <span className={styles.span}>1.</span>
          <p className={styles.p}>la couleur.</p>
        </div>
        <div className={styles.colorDescription}>
          <p>
            Cliquez sur la bulle pour choisir la couleur de votre BubbleCard :
          </p>
        </div>
        <div className={styles.colorEditor}>
          <div className={styles.inputColorLine}>
            {colors.map((color, key) => (
              <div
                className={
                  color === colorSelected
                    ? styles.ok
                    : styles.inputColorContainer
                }
                style={{ backgroundColor: color }}
                key={key}
                onClick={() => setColor(color)}
              ></div>
            ))}
          </div>
        </div>
        {/* MESSAGE */}
        {colorSelected !== "" ? (
          <>
            <div className={styles.messageTitle}>
              <span className={styles.span}>2.</span>
              <p className={styles.p}>le message.</p>
            </div>
            <div className={styles.messageDescription}>
              <p>Tapez votre message :</p>
            </div>
            <div className={styles.messageEditor}>
              <ReactQuill
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  position: "relative",
                  fontFamily: "Open Sans Medium",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: 14,
                  backgroundColor: "white",
                }}
                theme="snow"
                modules={modules}
                onChange={onChangeMessage}
                value={message}
              />
            </div>
          </>
        ) : (
          ""
        )}
        {/* THEME */}
        {message && (
          <>
            <div className={styles.themeTitle}>
              <span className={styles.span}>3.</span>
              <p className={styles.p}>le thème.</p>
            </div>
            <div className={styles.themeDescription}>
              <p>Choisissez le thème que vous souhaitez :</p>
            </div>
            <div className={styles.themeEditor}>
              <select
                className={styles.themeSelect}
                name="themes"
                onChange={handleThemeChange}
                required
              >
                <option value="">--Sélectionnez un thème--</option>
                <option value="love">Amour 🥰</option>
                <option value="birthday">Anniversaire 🎂</option>
                <option value="noel">Noël 🎄</option>
                <option value="valentine">St Valentin 💘</option>
                <option value="funny">Pour le fun 😂 </option>
              </select>
            </div>
          </>
        )}
        {/* IMAGE */}
        {selectedTheme && (
          <>
            <div className={styles.imageTitle}>
              <span className={styles.span}>4.</span>
              <p className={styles.p}>l&apos;image.</p>
            </div>
            <div className={styles.imageDescription}>
              Récupérer votre Bubble Card !
            </div>
            <div className={styles.imageEditor}>
              <AliceCarousel
                responsive={responsive}
                mouseTracking
                items={images.map((image) => (
                  <img
                    key={image.id}
                    src={image.urls.small}
                    alt={image.alt_description}
                    className={
                      image === selectedImage
                        ? styles.imageSelected
                        : styles.image
                    }
                    onClick={() => handleSelectImage(image)}
                  />
                ))}
              />
            </div>
          </>
        )}
        {/* VIEW */}
        {selectedImage && (
          <>
            <div className={styles.viewTitle}>
              <span className={styles.span}>5.</span>
              <p className={styles.p}>l&apos;aperçu.</p>
            </div>
            <div className={styles.viewDescription}>
              <p>
                Voici l&apos;aperçu de votre Bubble Card avant téléchargement :
              </p>
            </div>
            <div className={styles.imageEditor}></div>
            <div className={styles.viewEditor}>
              {selectedImage && (
                <div
                  className={styles.card}
                  style={{
                    backgroundColor: colorSelected,
                    backgroundImage: "url(/images/bubbles.png)",
                    backgroundPosition: "center bottom",
                    backgroundSize: "cover",
                  }}
                  id="content"
                >
                  <img
                    src={selectedImage.urls.small}
                    alt=""
                    className={styles.cardImage}
                    onLoad={handleImageLoad}
                    style={{
                      border: "#3C98CC 1px solid",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "2rem",
                      background: "rgba(255, 255, 255, .5)",
                      padding: "2rem",
                      borderRadius: 10,
                    }}
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                </div>
              )}
            </div>
          </>
        )}
        {/* UPLOAD */}
        {selectedImage && (
          <>
            <div className={styles.uploadTitle}>
              <span className={styles.span}>6.</span>
              <p className={styles.p}>l&apos;upload.</p>
            </div>
            <div className={styles.uploadDescription}>
              Récupérez votre Bubble Card !
            </div>
            <div className={styles.buttonWrapper}>
              <Button
                className={styles.button}
                text="⤓ Upload "
                onClick={handleDownload}
              ></Button>
            </div>
            {upload && (
              <div className={styles.thanksDescription}>
                Votre Bubble Card a été téléchargée ! <br></br>Merci 😄
                <div className={styles.img_wrapper}>
                  <img
                    className={styles.banner_img}
                    src="/images/girlNdog2.png"
                    alt="girl gum"
                  />
                </div>
              </div>
            )}
          </>
        )}
      </form>
    </>
  );
};

export default Grid;
