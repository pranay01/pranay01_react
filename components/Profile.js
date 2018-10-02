

const Profile = () => (
    <div className="logo">
        <img src="https://pbs.twimg.com/profile_images/939728518820147200/c66ZKD4G_400x400.jpg"/>
    
        <style jsx>{`
          .logo {
                 border-bottom: 0;
                 display: inline-block;
                 margin: 0 0 (_size(element-margin) * 0.5) 0;
                 overflow: hidden;
                 position: relative;
            }
                    
         .logo img {
            width: 10em;
            border-radius: 50%;
            display: block;
        }
        
    `}</style>
    
    </div>
)

export default Profile

