import "../assets/styles/components.css";
import KillPhishLogo from "../assets/images/killphish-logo.png"
import KillPhishLogo2 from "../assets/images/logo.png"
import html2pdf from "html2pdf.js";
import CPATBadge from '../assets/images/badge.png';


const CertificateTemplate = ({ userName, correctAnswers, totalQuestions }) => {
    const date = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

    const generatePDF = () => {
        const element = document.getElementById("certificate");
        const options = {
            filename: `${userName}_certificate.pdf`,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 4 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        };
        html2pdf(element, options);
    };

    return (
        <div className="certificate-container">
            <div id="certificate" class="cpat-certificate">
                <div class="left-panel">
                    <p class="acknowledge">This is to acknowledge that</p>
                    <h2 class="name">{userName}</h2>
                    <p class="certified-as">is certified as an</p>
                    <h1 class="cpat-title">CPAT+</h1>
                    <p class="cpat-sub">(Certified Phishing Awareness Training Plus)</p>
                    <p class="cert-description">
                    and successfully completed all requirements and criteria for said certification through examination by KillPhish.
                    </p>
                    <p class="date-label">This certification was earned on</p>
                    <p class="cert-date">{date}</p>
                    <div class="badge-logo">
                        <img src={CPATBadge} alt="CPAT+ Badge" />
                    </div>
                </div>
                <div class="right-panel">
                <img src={KillPhishLogo} alt="KillPhish Logo" />
                    <div class="killphish-logo">
                        <img src={KillPhishLogo2} alt="KillPhish Logo" class="killphish-logo-img" />
                    </div>
                </div>
            </div>
            <button className="btn__reg" onClick={generatePDF}>Download Certificate</button>
        </div>
    );
};

export default CertificateTemplate;