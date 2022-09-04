import randomColorGenerator from '../randomColorGenerator';

test('xx', () => {
    for(let i = 0; i<300; i++) {
        const colors = randomColorGenerator();
        expect(colors).toMatch(/#....../);
    }

});