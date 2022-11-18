import ads from "../db.json";

function getAllAds() {
  return ads;
}

function getAdById(id) {
  return ads.find((ad) => {
    return ad.id === id;
  });
}

export { getAllAds, getAdById };
