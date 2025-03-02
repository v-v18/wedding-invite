import React, { useEffect, useState } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./Photos.css";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchPhotos();
      } else {
        setPhotos([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchPhotos = async () => {
    setLoading(true);
    try {
      const storage = getStorage();
      const photosRef = ref(storage, "photos");
      const photoList = await listAll(photosRef);

      const urls = await Promise.all(photoList.items.map(async (item) => {
        return { name: item.name, url: await getDownloadURL(item) };
      }));

      setPhotos(urls);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
    setLoading(false);
  };

  // Separate BUM01824.JPG from other photos
  const mainPhoto = photos.find(photo => photo.name === "BUM01824.JPG");
  const otherPhotos = photos.filter(photo => photo.name !== "BUM01824.JPG");

  return (
    <div className="photos-container">
      <h2>Private Photo Gallery</h2>
      {user ? (
        <div>
          {loading ? <p>Loading photos...</p> : null}
          
          {/* Row of 3 Photos */}
          <div className="photo-row">
            {otherPhotos.map((photo, index) => (
              <img key={index} src={photo.url} alt={`Photo ${index + 1}`} className="photo-item" />
            ))}
          </div>

          {/* Large Centered Photo */}
          {mainPhoto && (
            <div className="main-photo-container">
              <img src={mainPhoto.url} alt="Main Photo" className="main-photo" />
            </div>
          )}
        </div>
      ) : (
        <p>You must be logged in to view photos.</p>
      )}
    </div>
  );
};

export default Photos;
