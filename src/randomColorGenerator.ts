export default function randomColorGenerator() {
    const places = [0, 1, 2];
    const mainPlace = places.splice(Math.floor(Math.random() * 3));
    const value = Math.floor(Math.random() * 255).toString(16);
    const place0 = places.splice(Math.floor(Math.random() * 2));
    const place255 = places.splice(0)

    let rgb = ['00', '00', '00'];

    rgb[mainPlace[0]] = value;
    rgb[place0[0]] = '00';
    rgb[place255[0]] = 'ff';

    return '#' + rgb[0] + rgb[1] + rgb[2];
}