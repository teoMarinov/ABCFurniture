const handleFavorite = (id: number) => {
        let favoritedIds = JSON.parse(localStorage.getItem('favorited')!) || [];

        if (favoritedIds.includes(id)) {
          favoritedIds = favoritedIds.filter((favId: number) => favId !== id);
        } else {
          favoritedIds.push(id);
        }
      
        localStorage.setItem('favorited', JSON.stringify(favoritedIds));
}
export default handleFavorite