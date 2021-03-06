import React, { useState } from "react"
import "./index.scss"
import AccessPage from "../../components/accessPage"
import Header from "../../components/header"
import Footer from "../../components/footer"
import CommentArea from "../../components/commentArea"

function Auth() {
  const [sign, onSign] = useState(true)
  const onChangeSign = () => {
    sign ? onSign(false) : onSign(true)
  }

  return (
    <div className="container">
      <Header change={onChangeSign} log={sign} />
      <div className="line-title" />
      <div className="container__content">
        <CommentArea />
        <AccessPage sign={sign} />
      </div>
      <Footer />
    </div>
  )
}
export default Auth
