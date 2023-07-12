import styles from "./searchInput.module.css"
import Lupa from "../../assets/lupa.svg"

export const SearchInput = ()=>{
    return(
            <div className={styles.wrapper}>
                <input
                    className={styles.container}
                    placeholder="Pesquisar Graodegente.com.br"
                />
                <Lupa height={20} width={20} color="#00BFB3"/>
            </div>
      
    )
}