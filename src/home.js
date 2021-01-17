const Home = () => {
    return (
        <div>
            <h2>Welcome page</h2>
            <ul>
                <li>
                    First thing to do is to change your url in settings.js
                </li>
                <li>
                    Make sure you have a running backend that matches the url from the first step
                </li>
                <div class="lineHorizontal__container">
                    <div class="lineHorizontal"></div>
                </div>
                <li>
                    To deploy the project on your droplet
                    <ul>
                        <li>SSH to your drop and add an empty folder in /var/www (mkdir "foldername")</li>
                        <li>Give permission to the folder by typing (chmod -R 777 "foldername") </li>
                        <li>Go to the projects root folder and type (npm run build)</li>
                        <li>Still at the root of the projects folder type (scp -r ./build/* root@"IP Address":/var/www/"foldername")</li>
                        <li>The project is now deployed :D</li>
                    </ul>
                </li>
                <li>
                    Make sure to update nginx configurations to handle multiple routes!
                    Steps 7-9
                </li>
                <li>All can be found here: <a href="https://docs.google.com/document/d/1SQ1PDcd-ySpH4_YAL8tXGnsT9wFdJiBkRtcGZ3Pqq90/edit">Original Guide</a></li>
                <li>Last step is to open backend project and change the remote server address to your own(domainname.something/tomcat/...</li>
            </ul>
        </div>
    )
};

export default Home;