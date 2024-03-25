import Button from "../ui/Button"

const EmptyCart = ({goToLandingPage}) => {
  return (
      <div className="text-center justify-center items-center m-auto mt-[38%] flex-col space-y-3 p-6">
          <h1 className="text-2xl font-semibold">Your cart is empty</h1>
          <Button
            click={goToLandingPage}
            className="px-4 py-3 rounded-3xl cursor-pointer w-full bg-black text-white"
            name="Return to Shop"
          />
        </div>
  )
}

export default EmptyCart
