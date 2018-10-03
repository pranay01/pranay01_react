import data from '../data/contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const avatar = {
    name: 'Pranay Prateek',
    imageUrl: "https://pbs.twimg.com/profile_images/939728518820147200/c66ZKD4G_400x400.jpg"
  };

const Profile = () => (
    <div>
    <div className="logo">
        
        <img src={avatar.imageUrl}/>
        <p> {avatar.name} </p>
    </div>
    <div className="icons">
        <ul>
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
        </ul>
    </div>
        <style jsx>{`

            ul {
                display: flex;
                list-style: none;
                text-align: center;

            }

            li {
                padding-left: 10px;
                padding-right: 10px;
            }
        
          .icons {
              padding : 0;
          }

          .logo {
                 border-bottom: 0;
                 display: inline-block;
                 margin: 0 0 (_size(element-margin) * 0.5) 0;
                 overflow: hidden;
                 position: relative;
                 padding: 20;
            }
                    
         .logo img {
            width: 10em;
            border-radius: 50%;
            display: block;
        }

        .logo p {
            text-align: center;
            font-family: "Arial";
            color : blue;
        }

       
        
    `}</style>
    
    </div>
)

export default Profile

