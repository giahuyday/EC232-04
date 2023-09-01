const CheckOutCard = ({props}) => {
    return(
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-6">
              <img src={props.Content} alt="" className="w-12 h-12" />
              <div className="">{props.Name} x{props.Quantity}</div>
            </div>
            <span>${props.Price}</span>
          </div>
    )
}

export default CheckOutCard