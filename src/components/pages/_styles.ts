import styled from "styled-components";


const HeaderWrapper = styled.div`
    background-color: #000000;
    width: 100%;
    height: 100px;
    text-align: center;
    color: white;
`

const BodyWrapper = styled.div`
    display: flex;
`

const AllNavigationWrapper = styled.div`
    background-color: white;
    min-height: 400px;
    width: 30%;
    color: #282c34;
    font-size: 30px;
`

const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 20px;

    & > a {
        text-decoration: underline;
        color: #1e3786;
    }

    & > a.active {
        text-decoration: none;
        color: #03eaff;
    }

    & > a:hover {
        color: steelblue;
    }
`

const Content = styled.div`
    background-color: #282c34;
    min-height: 400px;
    width: 70%;
    color: white;
    font-size: 30px;
`

const Footer = styled.footer`
    background-color: #000000;
    width: 100%;
    height: 120px;
    text-align: center;
    color: white;
`

const PhotoWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;

    & > a {
        //display: flex;
        //justify-content: center;
        //gap: 20px;
    }
`

const FlexWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const LinkLikeButton = styled.a`
    height: 54px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #0056b3;
    }
`

const ButtonLikeLink = styled.button`
    margin-left: 5px;
    height: 55px;
    background-color: #ff00b7;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 30px;

    &:hover {
        background-color: #980569;
    }
`

const HorizontalNavigation = styled.div`
    display: flex;
    justify-content: center;
`

export const S = {
   NavWrapper,
   HeaderWrapper,
   BodyWrapper,
   AllNavigationWrapper,
   Content,
   Footer,
   PhotoWrapper,
   FlexWrapper,
   LinkLikeButton,
   ButtonLikeLink,
   HorizontalNavigation
}