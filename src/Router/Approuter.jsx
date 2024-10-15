import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Main from "../core/Main/Main";
import Homepage from "../components/Homepage";
import AimscopePage from "../components/AimscopePage";
import AboutusPage from "../components/AboutusPage";
import AuthorguidelinesPage from "../components/AuthorguidelinesPage";
import CallforpaperPage from "../components/CallforpaperPage";
import ContactusPage from "../components/ContactusPage";
import CopyrightsPage from "../components/CopyrightsPage";
import EditorialboardPage from "../components/EditorialboardPage";
import IssuesPage from "../components/IssuesPage";
import PayfeesPage from "../components/PayfeesPage";
import PeerReview from "../shared/journal overview/PeerReview";
import PublicationEthics from "../shared/journal overview/PublicationEthics";
import Abstracting from "../shared/journal overview/Abstracting";
import ArticleProcess from "../shared/journal overview/ArticleProcess";



export default function Approuter() {



  return (
    <BrowserRouter>
        <Routes>
          
          <Route element={<Main />}>
             <Route path="/" element={<Homepage />} />
            <Route path="/aim-nd-scope" element={<AimscopePage />} />
            <Route path="/aboutus" element={<AboutusPage />} />
            <Route path="/author-guidelines" element={<AuthorguidelinesPage />} />
            <Route path="/call-for-papers" element={<CallforpaperPage />} />
            <Route path="/contactus" element={<ContactusPage />} />
            <Route path="/copyrights-form" element={<CopyrightsPage />} />
            <Route path="/editorial-board" element={<EditorialboardPage />} />
            <Route path="/issues" element={<IssuesPage />} />
            <Route path="/pay-fees" element={<PayfeesPage/>} />
            <Route path="/peer-review" element={<PeerReview/>} />
            <Route path="/pub-ethics" element={<PublicationEthics/>} />
            <Route path="/abstracting&index" element={<Abstracting/>} />
            <Route path="/articleindex" element={<ArticleProcess/>} />
            
          </Route>
        </Routes>
      
    </BrowserRouter>
  );
}
