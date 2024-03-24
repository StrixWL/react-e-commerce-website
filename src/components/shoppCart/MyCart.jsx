import QuantitySelector from "../productsDetails/productInfos/QuantitySelector";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EmptyCart from "./EmptyCart";

const MyCart = ({cartItems, formatPrice, setQuantity, removeFromCart, goToLandingPage}) => {
  return (
    <div>
      {cartItems.length > 0 ? (
        <section className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li className="flex py-6" key={item.id}>
                  <div className="h-32 w-32 flex-shrink-0 overflow-hidden ">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href="#">{item.title}</a>
                        </h3>
                        <p className="ml-4">{formatPrice(item.price)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        Color: {item.color}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Size: {item.size}
                      </p>
                    </div>
                    <div className="flex flex-1 items-center mt-4 justify-start space-x-4 text-sm">
                      <QuantitySelector
                        quantity={item.quantity}
                        setQuantity={setQuantity}
                      />
                      <div className="flex mt-6">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          <DeleteOutlinedIcon color="action" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : (
        <EmptyCart goToLandingPage={goToLandingPage} />
      )}
    </div>
  );
};

export default MyCart;
