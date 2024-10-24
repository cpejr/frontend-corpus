import { useEffect, useState } from "react";

import { VideoListContainer } from "./Styles";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//Os comentários abaixo são apenas para levar em conta um array de testes,

//import axios from "axios";

export default function VideoList({ onEdit }) {
  const [videos, SetVideos] = useState([]);

  //   useEffect(() => {
  //     async function fetchVideos() {
  //       const response = await axios.get("http://localhost:8000/");

  //       SetVideos(response.data);
  //     }
  //     fetchVideos();
  //   }, []);

  useEffect(() => {
    const TesteArray = [
      {
        id: 1,
        title: "Vídeo 1",
        url: "https://youtu.be/60BP7rh0HT8?si=b2S_FtDunpvIWle1",
      },
      {
        id: 2,
        title: "Vídeo Muito Bom",
        url: "https://youtu.be/4VXErA63_eg?si=mvwwzuL1tfwvS3gy",
      },
      {
        id: 3,
        title: "Vídeo Interessante",
        url: "https://www.youtube.com/live/VixYfv0UEyE?si=uW39G8Rrr-rpF1Sz",
      },
    ];
    SetVideos(TesteArray);
  }, []);

  return (
    <VideoListContainer>
      {videos.length === 0 ? (
        <p>Nenhum Vídeo Disponível</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {videos.map((video) => (
            <li
              key={video.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Link
                to={`/video/`}
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <h3>{video.title}</h3>
              </Link>
              <button
                onClick={() => onEdit(video.id)}
                style={{ marginLeft: "10px" }}
              >
                Editar
              </button>

              <hr
                style={{
                  flex: 1,
                  margin: "0 10px",
                  border: "1px solid black",
                  marginRight: "200px",
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </VideoListContainer>
  );
}
VideoList.PropTypes = {
  onEdit: PropTypes.func.isRequired,
};
