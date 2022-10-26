function Join() {

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h3 className="text-lg font-bold">Join the pack 🐺</h3>
        <p className="text-sm dark:text-gray-200">Sign up today and receive a discount voucher to use in the shop!</p>
      </div>
      <div className="flex justify-center">
        <button className="bg-jack hover:bg-jack-light text-white font-bold p-2 px-6 rounded-full text-center hover:underline">Sign Up</button>
      </div>
    </div>
  )
}

export default Join