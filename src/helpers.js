/* Adds the images for pokemon as key value pairs into an array of pokemon objects
 *
 * Returns the pokemon array
 **/

function addImage(pokemon) {
  for (const p of pokemon) {
    let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`;
    p.image = image;
  }
  return pokemon;
}

export default addImage;
