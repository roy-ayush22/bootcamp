import type { CSSProperties } from "react";

const App = () => {
  return (
    <div>
      <Post
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhlFsj8Ns00f_J1Ph_MnF8uj1sz6T7vMoEympUiTypw&s=10"
        name="gintoki"
        job="Odd Jobs"
        location="Japan"
        description="Gintama is known for its massive, quirky cast. The core freelance group, the Yorozuya, consists of the sweet-tooth samurai Gintoki Sakata, the tsundere alien teenager Kagura, and the straight-laced human teenager Shinpachi Shimura, along with their giant dog, Sadaharu"
      />

      <Post
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdsqn_9SGFJNw7lkdzxNGdEJbyZmqzr-ERfzRZulmWsg&s=10"
        name="Kagura"
        job="Odd Jobs"
        location="Japan"
        description="a strong girl"
      />
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  container: {
    background: "white",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "500px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  header: {
    display: "flex",
    gap: "15px",
    marginBottom: "12px",
  },
  avatar: {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  name: {
    fontWeight: "bold",
    fontSize: "14px",
  },
  bioPrimary: {
    fontSize: "12px",
    color: "#666",
  },
  bioSecondary: {
    fontSize: "12px",
    color: "#999",
  },
  content: {
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#333",
  },
};

type PostProps = {
  imageUrl: string;
  name: string;
  job: string;
  location: string;
  description: string;
};

const Post = ({ imageUrl, name, job, location, description }: PostProps) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src={imageUrl} style={styles.avatar} />
        <div style={{ flex: 1 }}>
          <div style={styles.name}>{name}</div>
          <div style={styles.bioPrimary}>{job}</div>
          <div style={styles.bioSecondary}>{location}</div>
        </div>
      </div>
      <div style={styles.content}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default App;
