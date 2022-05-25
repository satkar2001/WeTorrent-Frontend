import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";

const Wrapper = styled(Container)`
    padding-left: 25px;
    padding-right: 25px;
    display: flex;
`;
const Navi = styled(Nav)`
    margin-left: auto;
`;

const Header = () => {
    return (
        <Navbar  variant="dark" fixed="top" style={{ marginBottom: '10px', display: 'block' ,backgroundColor:"rgb(8, 35, 69)"}}>
            <Wrapper>
                <Navbar.Brand href="/">WeTorrent</Navbar.Brand>
                <Navi>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/feedback">Feedback</Nav.Link>
                    <Nav.Link href="https://github.com/satkar2001/wetorrent-a-torrent-search-engine" target="_blank">github</Nav.Link>
                </Navi>
            </Wrapper>
        </Navbar >
    );
}

export default Header;