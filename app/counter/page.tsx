import Counter from "../../components/CountButton"
import "../../styles/counter-styles.css"

export default function Page() {
     return (
          <div>
               <Counter/>
               <Counter incrementBy={2} color={"green"}/>
          </div>
     );
}