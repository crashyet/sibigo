import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import useScrollReveal from '../../hooks/useScrollReveal'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import NotFound from '../not-found/NotFound'
import ArtikelCard from '../../components/ui/ArtikelCard'
import articlesData from './articlesData.js'
import BackButton from '../../components/ui/BackButton'

const DetailArtikel = () => {
  const { id } = useParams()
  const [article, setArticle] = useState(null)

  useEffect(() => {
    const found = articlesData.find(a => a.id === parseInt(id))
    setArticle(found)
    window.scrollTo(0, 0)
  }, [id])

  useScrollReveal([article])

  if (!article) {
    return (
      <>
        <NotFound />
      </>
    )
  }

  const relatedArticles = articlesData.filter(a => a.id !== article.id).slice(0, 3)

  return (
    <>
      <Navbar />
      <section className="pt-32 min-h-screen font-pjs px-36">
        <BackButton to="/konten" variant="gray" />

        <div className="pr-20 mb-28 mt-10">
          <div className="flex flex-col gap-5 mb-12">
            <h2 className='text-black text-4xl font-bold'>{article.title}</h2>
            <p className='text-black/70 text-lg'>{article.date}</p>
          </div>

          <div className="mb-9">
            <img src={article.image} alt={article.title} className='w-full max-h-192 object-cover object-top rounded-3xl' />
          </div>

          <div className="flex items-center justify-between mb-10">
            <p className='text-black/70 text-xl font-medium'>{article.views} Tayangan</p>
            <div className="flex gap-5 text-black font-medium text-lg">
              <div className="flex gap-2">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.27273 11.8126V29.5316H0V11.8126H7.27273ZM14.5455 29.5316C13.581 29.5316 12.6561 29.2204 11.9742 28.6666C11.2922 28.1128 10.9091 27.3616 10.9091 26.5784V11.8126C10.9091 11.0005 11.3091 10.2622 11.9818 9.73065L23.9455 0L25.8727 1.56517C26.3636 1.96385 26.6727 2.51018 26.6727 3.11558L26.6182 3.58809L24.8909 10.3361H36.3636C37.3281 10.3361 38.253 10.6472 38.9349 11.201C39.6169 11.7548 40 12.506 40 13.2892V16.2424C40 16.6263 39.9091 16.9807 39.7455 17.3203L34.2545 27.7302C33.7091 28.7933 32.4182 29.5316 30.9091 29.5316H14.5455ZM14.5455 26.5784H30.9636L36.3636 16.2424V13.2892H20.3818L22.4364 5.43381L14.5455 11.8569V26.5784Z" fill="#3338A0" />
                </svg>
                <p>{article.like} Likes</p>
              </div>
              <div className="flex gap-2">
                <svg width="35" height="26" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 25.3025C17.0781 25.3025 16.6734 25.1813 16.3751 24.9656C16.0767 24.7499 15.9091 24.4574 15.9091 24.1523V20.702H9.54545C8.70158 20.702 7.89228 20.4597 7.29557 20.0283C6.69886 19.5969 6.36364 19.0118 6.36364 18.4018V6.90067C6.36364 6.29061 6.69886 5.70554 7.29557 5.27417C7.89228 4.84279 8.70158 4.60045 9.54545 4.60045H31.8182C32.6621 4.60045 33.4714 4.84279 34.0681 5.27417C34.6648 5.70554 35 6.29061 35 6.90067V18.4018C35 19.0118 34.6648 19.5969 34.0681 20.0283C33.4714 20.4597 32.6621 20.702 31.8182 20.702H25.2955L19.4091 24.9689C19.0909 25.1874 18.6932 25.3025 18.2955 25.3025H17.5ZM19.0909 18.4018V21.9441L23.9909 18.4018H31.8182V6.90067H9.54545V18.4018H19.0909ZM3.18182 16.1016H0V2.30022C0 1.69017 0.335226 1.1051 0.931933 0.67372C1.52864 0.242344 2.33795 0 3.18182 0H28.6364V2.30022H3.18182V16.1016Z" fill="#3338A0" />
                </svg>
                <p>{article.comment} Komentar</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 text-black text-2xl max-w-9/10 ml-8 whitespace-pre-wrap">
            <p>{article.content}</p>
          </div>
        </div>

        <div className="mb-28 animate-on-scroll" data-animation="animate-fade-up">
          <h2 className='font-bold text-4xl text-black mb-8'>Artikel Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
            {relatedArticles.map((item) => (
              <ArtikelCard
                key={item.id}
                id={item.id}
                image={item.image}
                category={item.category}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default DetailArtikel
