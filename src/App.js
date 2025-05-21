import React,{useState} from 'react'


function App() {
    const [FlowerPokaz, setFlowerPokaz] = useState(true);
    const [AnimalPokaz, setAnimalPokaz] = useState(true);
    const [CarPokaz, setCarPokaz] = useState(true);

    const [FlowerDowloand, setFlowerDowloand] = useState(0);
    const [AnimalDowloand, setAnimalDowloand] = useState(0);
    const [CarDowloand, setCarDowloand] = useState(0);

    function FlowerDowloandChange() {
        setFlowerDowloand(FlowerDowloand + 1);
    }

    function AnimalDowloandChange() {
        setAnimalDowloand(AnimalDowloand + 1);
    }

    function CarDowloandChange() {
        setCarDowloand(CarDowloand + 1);
    }

    return (
        <div>
            <h1>Prosta Galeria</h1>

            <div>
                <label>
                    <p>Kwiaty</p>
                    <input type="checkbox" checked={!FlowerPokaz} onChange={() => setFlowerPokaz(!FlowerPokaz)}/>
                </label>
                <label>
                    <p>Zwierzęta</p>
                    <input type="checkbox" checked={!AnimalPokaz} onChange={() => setAnimalPokaz(!AnimalPokaz)}/>
                </label>
                <label>
                    <p>Samochody</p>
                    <input type="checkbox" checked={!CarPokaz} onChange={() => setCarPokaz(!CarPokaz)}/>
                </label>
            </div>


            {FlowerPokaz && (
                <div>
                    <h2>Kwiaty</h2>
                    <img src="/zdjecia/obraz1.jpg"/>
                    <img src="/zdjecia/obraz8.jpg"/>
                    <img src="/zdjecia/obraz2.jpg"/>
                    <button onClick={() => FlowerDowloandChange()}>Pobierz</button>
                    <p>Liczba pobrań: {FlowerDowloand}</p>

                </div>
            )}
            {AnimalPokaz && (
                <div>
                    <h2>Zwierzęta</h2>
                    <img src="/zdjecia/obraz3.jpg"/>
                    <img src="/zdjecia/obraz4.jpg"/>
                    <img src="/zdjecia/obraz5.jpg"/>
                    <img src="/zdjecia/obraz7.jpg"/>
                    <img src="/zdjecia/obraz9.jpg"/>
                    <img src="/zdjecia/obraz11.jpg"/>
                    <img src="/zdjecia/obraz10.jpg"/>
                    <button onClick={() => AnimalDowloandChange()}>Pobierz</button>
                    <p>Liczba pobrań: {AnimalDowloand}</p>

                </div>)}
            {CarPokaz && (
                <div>
                    <h2>Samochody</h2>

                    <img src="/zdjecia/obraz12.jpg"/>
                    <img src="/zdjecia/obraz6.jpg"/>
                    <button onClick={() => CarDowloandChange()}>Pobierz</button>
                    <p>Liczba pobrań: {CarDowloand}</p>

                </div>
            )}


        </div>
    );

}
export default App;