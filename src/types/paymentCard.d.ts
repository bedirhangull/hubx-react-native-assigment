interface IPaymentCard {
    selected: boolean
    packageName: string
    packageDescription: string
    onPress: () => void
    discount?: boolean
}