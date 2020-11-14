import { useState } from 'react';

import Button from '../components/Button';
import Container from '../components/Container';

import styles from '../styles.module.css';

function Home() {

    const [numero, setNumero] = useState(1);

    function subir(){
        setNumero(numero+1);
    }

    return (
        <Container>
            <div className={styles.content}>
                <h3>Contador</h3>
                <div>{numero}</div>
                <Button text="Adicionar" func={subir}></Button>
            </div>
        </Container>
    );
}

export default Home;