import Head from "next/head";
import { useContext, useEffect } from "react";
import { LoggedInContext, MagicContext, UserInfoContext } from "./Store";

import NavLink from "./NavLink";
import { useRouter } from "next/router";

const Layout = ({ flex = false, bgImage, logo, children }) => {
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  const [magic] = useContext(MagicContext);
  const [userInfo, setUserInfo] = useContext(UserInfoContext);

  const router = useRouter();
  /**
   * Log user out of of the session with our app (clears the `auth` cookie)
   * Log the user out of their session with Magic
   */

  /*  const communityContract = async () {
     if(userInfo.communityContract) return userInfo.communityContract;
 
   }; */

  const handleLogout = async () => {
    try {
      await magic.user.logout();
      console.log(await magic.user.isLoggedIn()); // => `false`
      setLoggedIn(false);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const { src: bgImageSrc, alignment: bgImageAlignment } = bgImage;
  const logoImage = logo.withImage ? "/dito-logo.svg" : "/isologo.svg";

  // if logged in show the nav menu, if not redirect to unlogged in index page.
  return (
    <>
      <Head>
        <title>DistributedTown</title>
      </Head>
      <main
        style={{
          ...(bgImageSrc ? { backgroundImage: `url(${bgImage.src})` } : {})
        }}
        className={`h-screen w-full bg-no-repeat bg-auto ${
          bgImageAlignment === "left" ? "bg-left" : "bg-right"
        } ${flex ? "flex" : ""}`}
      >
        <nav className="flex flex-col h-screen max-w-sm p-4 border-r-2 border-denim">
          {logo && (
            <div>
              <img src={logoImage} alt="Logo" />
            </div>
          )}
          {loggedIn && (
            <ul className="flex flex-col w-full mt-8">
              <NavLink href="/skillwallet">Skill Wallet</NavLink>
              <NavLink href="/community">Dashboard</NavLink>
              <NavLink href="#">Notifications</NavLink>
              <NavLink href="#">Settings</NavLink>
              <NavLink href="#" onClick={e => handleLogout()}>
                Logout
              </NavLink>
            </ul>
          )}
        </nav>
        {children}
      </main>
    </>
  );
  return null;
};

export default Layout;
