import Counter from "../components/CountButton"
import RepoInfo from "../components/GithubRepo";

export default function Page() {
     return (
          <div>
               <Counter/>
               <Counter incrementBy={2} color={"green"}/>
               <RepoInfo/>
          </div>
     );
}