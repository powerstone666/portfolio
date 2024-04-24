import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import gmail from './assets/gmail.png';
function Socialmedia() {
    return (
        <div className="flex justify-start  my-10 gap-7">
                <a className="hover:opacity-50 transition duration-500" href="https://www.linkedin.com/in/imranpasha636/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="linkedin"/>
                </a>
                <a className="hover:opacity-50 transition duration-500" href="https://github.com/powerstone666" target="_blank" rel="noreferrer">
                <img src={github} alt="github" className="h-8"/>
                </a>
                <a className="hover:opacity-50 transition duration-500" href="https://www.geeksforgeeks.org/user/powerstone666" target="_blank" rel="noreferrer">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210628182253/gfglogo.png" alt="geekforgeeks" className="h-8"/>
                </a>
                <a className="hover:opacity-50 transition duration-500" href="https://leetcode.com/powerstone666/" target="_blank" rel="noreferrer">
                <img src="https://cdn.iconscout.com/icon/free/png-512/leetcode-3628885-3030025.png" alt="leetcode" className="h-8"/>
                </a>
                <a className="hover:opacity-50 transition duration-500" href="mailto:imranpasha8225@gmail.com" target="_blank" rel="noreferrer">
                <img src={gmail} alt="gmail" className="h-8"/>
                </a>
        </div>
    );
}
export default Socialmedia;