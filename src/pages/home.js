import React from 'react'
import OptForm from '../components/opt-form'
import { Feature } from '../components'
import HeaderContainer from '../containers/header'
import { FaqsContainer } from '../containers/faqs'
import { FooterContainer } from '../containers/footer'
import { JumbotronContainer } from '../containers/jumbotron'

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited movies, TV shows and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel anytime.
          </Feature.SubTitle>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your membership.
          </OptForm.Text>
          <OptForm>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Get Started</OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}
