import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { Button } from "../styles/Button";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [openProfile, setOpenProfile] = useState(false);
  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;
      align-items: center;

      li {
        list-style: none;

        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }

    .profile_avatar {
      vertical-align: middle;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 6px;
    }
    .profile_details {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .mobile-navbar-btn {
      display: none;

      .close-outline {
        display: none;
      }
    }
    
    .dropdown_list_div {
      position: absolute;
      top: 8rem;
      right: 14rem;
      width: 128px;
      padding: 15px;
      border-radius: 8px;
      background-color: white;
      font-size: 18px;
      border: 2px solid gray;
    }
  
    .dropdown_list_ul::before {
      content: "";
      position: absolute;
      top: -0.7rem;
      right: 1.1rem;
      width: 20px;
      height: 20px;
      transform: rotate(45deg);
      background-color: white;
      border-left: 2px solid gray;
      border-top: 2px solid gray;

    }
    .button_logout_dropdown {
      background: none!important;
      border: none;
      padding: 0!important;    
      font-size: 18px;
      cursor: pointer;
    }

    .mobile-navbar-btn[name="close-outline"] {
      display: none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      /* hide the original nav menu  */
      .navbar-list {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align: center;

        transform: translateX(100%);

        visibility: hidden;
        opacity: 0;

        li {
          .navbar-link {
            &:link,
            &:visited {
            font-size: 4.2rem;
            }

            &:hover,
            &:active {
              color: ${({ theme }) => theme.colors.helper};
            }
          }
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 3%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .active .navbar-list {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
      }
    }
      export const NavLink = styled(Link)
      color: #808080;
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0 1rem;
      height: 100%;
      cursor: pointer;
      &.active {
      color: #000000;
  }
  `;

  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/"
            >
              Home
            </NavLink>
          </li>

          {isAuthenticated ? (
            <>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/ToEdit"
                >
                  Convert Photos
                </NavLink>
              </li>
            </>
          ) : (
            <></>
          )}

          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/Gallary"
            >
              Gallary
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>

          {isAuthenticated && (
            <>
              <li>
                <div className="profile_details">
                  <img
                    className="profile_avatar"
                    src={user.picture}
                    onClick={() => setOpenProfile((prev) => !prev)}
                  />
                  <h3 onClick={() => setOpenProfile((prev) => !prev)}>
                    {user.name}
                  </h3>
                  {/* DROP DOWN START */}
                  {openProfile && (
                    <div className="dropdown_list_div">
                      <ul className="dropdown_list_ul">
                        {/* <li>Profile</li>-----------------------------------------------------------------------profile */}

                        <li>
                          <button
                            className="button_logout_dropdown"
                            onClick={() =>
                              logout({
                                logoutParams: {
                                  returnTo: window.location.origin,
                                },
                              })
                            }
                          >
                            Log Out
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            </>
          )}

          {isAuthenticated ? (
            // <li>
            //   <Button
            //     onClick={() =>
            //       logout({
            //         logoutParams: { returnTo: window.location.origin },
            //       })
            //     }
            //   >
            //     Log Out
            //   </Button>
            // </li>
            <></>
          ) : (
            <li>
              <Button onClick={() => loginWithRedirect()}>Log In</Button>
            </li>
          )}
        </ul>

        {/* //nav icon */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
