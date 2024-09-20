import LineDivider from 'components/atoms/LineDivider'
import FaqTabbar from 'components/molecules/FaqTabbar'
import PageSentence from 'components/molecules/PageSentence'
import FaqList from 'components/organisms/FaqList'
import PageTemplate from 'components/templates/PageTemplate'
import React, { useEffect, useState } from 'react'
import getRandomItemsFromArray from 'utils/getRandomItemsFromArray'

const Faq = () => {
  const faqs = [
    {
      title: `What services does codeNroot Technologies offer?`,
      description: `We specialize in software development, consulting, hosting, and related technology solutions for businesses of all sizes.`,
    },
    {
      title: `2. Do you work with clients globally?`,
      description: `Yes, we work remotely and serve clients worldwide, offering flexible collaboration options to meet your time zone and business needs.`,
    },
    {
      title: `What technologies do you use?`,
      description: `We use a variety of modern programming languages, frameworks, and tools, including Laravel, React, Node.js, Python, and more, based on the requirements of each project.`,
    },
    {
      title: `How do you ensure the quality of your projects?`,
      description: `We follow industry best practices, conduct rigorous testing, and maintain regular communication with clients to ensure quality and satisfaction.`,
    },
    {
      title: `Do you offer ongoing support and maintenance?`,
      description: `Yes, we provide continuous support and maintenance to ensure your software runs smoothly after deployment.`,
    },
    {
      title: `How can I get a quote for my project?`,
      description: `You can fill out the contact form on our website or email us at info@codenroot.in with your project details, and we’ll get back to you with a customized quote..`,
    },
  ]
  const [randomFaqs, setRandomFaqs] = useState([faqs, faqs, faqs, faqs])
  const [activeFaq, setActiveFaq] = useState(faqs)
  useEffect(() => {
    const faqs = [
      {
        title: `What services does codeNroot Technologies offer?`,
        description: `We specialize in software development, consulting, hosting, and related technology solutions for businesses of all sizes.`,
      },
      {
        title: `2. Do you work with clients globally?`,
        description: `Yes, we work remotely and serve clients worldwide, offering flexible collaboration options to meet your time zone and business needs.`,
      },
      {
        title: `What technologies do you use?`,
        description: `We use a variety of modern programming languages, frameworks, and tools, including Laravel, React, Node.js, Python, and more, based on the requirements of each project.`,
      },
      {
        title: `How do you ensure the quality of your projects?`,
        description: `We follow industry best practices, conduct rigorous testing, and maintain regular communication with clients to ensure quality and satisfaction.`,
      },
      {
        title: `Do you offer ongoing support and maintenance?`,
        description: `Yes, we provide continuous support and maintenance to ensure your software runs smoothly after deployment.`,
      },
      {
        title: `How can I get a quote for my project?`,
        description: `You can fill out the contact form on our website or email us at info@codenroot.in with your project details, and we’ll get back to you with a customized quote..`,
      },
    ]
    setRandomFaqs([
      faqs,
      getRandomItemsFromArray(faqs, 5),
      getRandomItemsFromArray(faqs, 4),
      getRandomItemsFromArray(faqs, 3),
    ])
  }, [])
  return (
    <PageTemplate>
      <section className="grid grid-cols-1 place-items-center">
        <div className="sm:w-10/12 md:8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="FAQ"
            title="Frequently asked questions, maybe the same as yours"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-5">
        <div className="basis-12/12 md:basis-4/12" data-aos="fade-up">
          <FaqTabbar
            tabs={[
              {
                name: 'General',
                onClick: () => {
                  setActiveFaq(randomFaqs[0])
                },
              },
              {
                name: 'Transaction',
                onClick: () => {
                  setActiveFaq(randomFaqs[1])
                },
              },
              {
                name: 'Maintenance',
                onClick: () => {
                  setActiveFaq(randomFaqs[2])
                },
              },
              {
                name: 'Technology',
                onClick: () => {
                  setActiveFaq(randomFaqs[3])
                },
              },
            ]}
          />
        </div>
        <div className="basis-12/12 md:basis-8/12">
          <FaqList faqs={activeFaq} />
        </div>
      </section>
      <LineDivider />
    </PageTemplate>
  )
}

export default Faq
