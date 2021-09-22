import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Iqan Shaikh.
        </BigTitle>
        <Subtitle>Microsoft certified azure developer associate. I’m a learner, dreamer, passionate programmer, mentor, badminton player, gamer and software craftsman.</Subtitle>
      </Hero>
      <About offset={1}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Iqan Shaikh" />
          <AboutSub>
            Sr. Consultant at Deloitte | .NET | MS Azure | DevOps | NodeJS | React | Flutter | React Native
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I have written code that does solve problems of a few people and some features for a retailer 
          having 14 million customers. I’ve been making some good and some great projects for over 5 years. 
          From my experience I have learned many lessons due to my constant urge to experiment.
          I code, play video games and some sport, learn and listen – usually not in that order.
        </AboutDesc>
      </About>
      <Projects offset={2}>
        <Title>Articles</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Sending notifications to mobile devices using Azure Functions"
            link="https://itnext.io/sending-notifications-to-mobile-devices-using-azure-functions-4322771ee6e1"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Notification functionality based on data updates in Azure Cosmos DB using Azure Functions, Azure Notification hub and Flutter application.
          </ProjectCard>
          <ProjectCard
            title="Continuously releasing Flutter app to Play store using Github Actions"
            link="https://medium.com/@iqan/continuously-releasing-flutter-app-to-play-store-using-github-actions-eca2f5f6e996"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Using github actions workflow, we will build android application and release it to google play store.
          </ProjectCard>
          <ProjectCard
            title="Containerizing a .Net Core service with Docker"
            link="https://medium.com/@iqan/containerizing-a-net-core-service-with-docker-cd9bb42fa6b"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Explaining how to prepare your backend service written in .Net Core for Docker, create docker image, run acceptance tests against your code and use of docker compose.
          </ProjectCard>
          <ProjectCard
            title="CI/CD for ReactJS app using Azure DevOps"
            link="https://medium.com/@iqan/ci-cd-for-reactjs-app-using-azure-devops-16b452558019"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Article on how to set up CI/CD (continuous integration and continuous deployment) pipeline for a web app built with ReactJS.
          </ProjectCard>
          </ProjectsWrapper>
      </Projects>
      <Projects offset={3}>
        <Title>Projects</Title>
        <ProjectsWrapper>      
          <ProjectCard
            title="Notes App"
            link="https://github.com/iqan/notes-app"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            A MEAN stack app with material design and microservice architecture.
          </ProjectCard>
          <ProjectCard
            title="NodeJS starter template"
            link="https://github.com/iqan/node-api-starter"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            A starter template for nodejs-expressjs-mongodb api with container support.
          </ProjectCard>
          <ProjectCard
            title="Service testing with Docker"
            link="https://github.com/iqan/service-testing-docker-poc"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            A proof of concept showcasing .Net Core service running in container and acceptance tests executing on it.
          </ProjectCard>
          <ProjectCard
            title="Tic Tac Toe mobile game"
            link="https://github.com/iqan/react-native-tic-tac-toe"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A tic-tac-toe game in react native.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:iqan.shaikh@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://linkedin.com/in/iqan">LinkedIn</a> |{' '}
            <a href="https://facebook.com/iqanshaikh">Facebook</a> |{' '}
            <a href="https://www.instagram.com/iqans/">Instagram</a> |{' '}
            <a href="https://github.com/iqan">Github</a> |{' '}
            <a href="https://medium.com/@iqan">Blogs</a>
          </ContactText>
        </Inner>
        <Footer>
          2021, Iqan Shaikh.{' '}
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
