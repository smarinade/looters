import CoinForm from "./component/Form/CoinForm";
import {useEffect} from "react";
import styles from "./App.module.css";

function App() {

    useEffect(() => {
        document.title = "Coin Splitter";
    }, []);

    return (
    <main>
        <article className={styles.article}>
            <h1><abbr title="Dungeons and Dragons">DnD</abbr> Coin Splitter</h1>
            <CoinForm></CoinForm>
        </article>
    </main>
  );
}

export default App;