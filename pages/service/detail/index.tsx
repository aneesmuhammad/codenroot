import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import FeatureCard, {
  FeatureCardProps,
} from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  FiClock,
  FiCode,
  FiFigma,
  FiLayout,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi'
import randomString from 'utils/randomString'

const ServiceDetail = () => {
  interface Faq {
    title: string
    description: string
  }
  const faqs: Faq[] = [
    {
      title: `What services does codeNroot Technologies offer?`,
      description: `We specialize in software development, consulting, hosting, and related technology solutions for businesses of all sizes.`,
    },
    {
      title: `Do you work with clients globally?`,
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
  const features: FeatureCardProps[] = [
    {
      title: 'Design Files',
      description:
        'Projects are well designed using Figma. You will get the design file.',
      icon: <FiFigma />,
    },
    {
      title: 'Same Day',
      description: `We don't want you to wait long. Everything will be finished on the same day.`,
      icon: <FiClock />,
    },
    {
      title: 'Quality Code',
      description: `Code written according to good practice is highly maintainable.`,
      icon: <FiCode />,
    },
    {
      title: 'SEO',
      description:
        'The website will appear on the first page of the search engine.',
      icon: <FiTrendingUp />,
    },
    {
      title: 'Responsive Design',
      description: `Access the website on any device, don't limit your visitors.`,
      icon: <FiLayout />,
    },
    {
      title: 'Blazing Fast',
      description:
        'A high speed website will not disappoint prospective customers.',
      icon: <FiZap />,
    },
  ]
  return (
    <PageTemplate title="Service Detail - codeNroot">
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="DEVELOPMENT"
            title="Solve your company's repetitive problems by designing apps"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
        <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
          <figure className="w-full h-[450px] relative">
            <Image
              src={'/images/development-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="IDE that connect to Desktop, Mobile and Web mean multiple platform"
            />
          </figure>
        </aside>
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full lg:text-left grid gap-10">
            <div className="grid gap-8">
              <Text
                value={`Just tell us your repetitive problem or the primitive method used today, and we will create a digital solution. <br> <br> We can build you a website, a mobile app and a desktop app. All types of applications have a good security system, are easy to maintain, and are high speed. `}
                textStyle={'SectionParagraph'}
              />
            </div>
            <ul className="list-square text-white text-base font-medium pl-5 grid gap-2.5">
              <li>Avoid potential bugs with unit testing</li>
              <li>Removing unused code will speed up the application</li>
              <li>The modern design pleases the users</li>
              <li>A good UX will not disappoint users</li>
            </ul>
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full"></div>
        </aside>
      </section>
      <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge=" FEATURES"
            title="Here's what you will get when purchasing this service"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            return (
              <div key={randomString(64)} data-aos="fade-up">
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  isNaked={true}
                />
              </div>
            )
          })}
        </div>
      </section>
      <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="FAQ"
            title="Frequently asked questions, maybe the same as yours"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-7">
          {faqs.map((faq) => {
            return (
              <div className="grid gap-2.5" key={randomString(64)} data-aos="fade-right">
                <Text textStyle="FAQTitle" value={faq.title} />
                <Text textStyle="FAQDescription" value={faq.description} />
              </div>
            )
          })}
        </div>
        <div className="text-white text-base font-medium">
          {`Didn't find an answer? `}
          <div className="sm:hidden"></div>
          <div className="text-primary inline">
            <Link href={'/quote'}>Do not hesitate to ask!</Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default ServiceDetail
