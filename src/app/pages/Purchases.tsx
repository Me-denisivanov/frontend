import React from "react"
import AllUserItems from "../components/AllUserItems"
import { useAppSelector } from "../redux/hooks"
import { userAuthData } from "../redux/slices/auth"

const Purchases: React.FC = () => {
  const myPurchases = useAppSelector(userAuthData)
  return (
    <>
      {!myPurchases ? (
        <h1>Вы не совершали покупок</h1>
      ) : (
        myPurchases &&
        myPurchases.buy.map((item, idx: number) => (
          <AllUserItems key={idx} {...item} />
        ))
      )}
    </>
  )
}

export default Purchases
