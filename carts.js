import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator, TextInput, Alert, Modal, Pressable } from 'react-native';
import { MaterialIcons, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class Cart extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectAll: false,
			cartItemsIsLoading: false,
			cartItems: [
				/* Imagenes sacadas de waltmart */
				{itemId: "501436323", name: "Sabrositos", thumbnailImage: "https://walmartar.vteximg.com.br/arquivos/ids/837858-1000-1000/Alimento-Para-Perro-Mix-CarnePollo-Y-Cerdo-Sabrositos-8-Kg---1kg-1-168268.jpg", info: "8 Kg + 1kg", qty: 1, salePrice: "833", checked: 0},

				{itemId: "35031861", name: "Pedigree", thumbnailImage: "https://walmartar.vteximg.com.br/arquivos/ids/877754-1000-1000/Alimento-Seco-Para-Perro-Verdura-Y-Pollo-Adulto-Rp-Pedigree-3kg-1-269251.jpg", qty: 1, info: "3 Kg", salePrice: "731", checked: 0},

				{itemId: "801099131", name: "Champ Mix Carnes", thumbnailImage: "https://walmartar.vteximg.com.br/arquivos/ids/877793-1000-1000/Alimento-Champ-Mix-Carnes-15kg-1-475370.jpg", qty: 1, info: "15 Kg", salePrice: "1736", checked: 0},

				{itemId: "42608079", name: "Raza Carne Y Vegetales", thumbnailImage: "https://walmartar.vteximg.com.br/arquivos/ids/888025-1000-1000/Alimento-Para-Perro-Raza-Carne-Y-Vegetales-X-15-K-1-479007.jpg?v=637474476890970000", info: "15 Kg", qty: 1, salePrice: "1985", checked: 0},

				{itemId: "247714372", name: "Voraz Carne", thumbnailImage: "https://walmartar.vteximg.com.br/arquivos/ids/899240-1000-1000/Alimento-Para-Perro-Voraz-Carne-15k-1-479801.jpg?v=637588384952530000", qty: 1, info: "15 Kg", salePrice: "1225", checked: 0}
			]
		}
	}

    //alerta para la compra, si clickea en comprar aparece nueva alerta con la compra
	_onPressButton = () =>
    Alert.alert(
      "Comprar",
      `¿Quiere continuar la compra? 
        Total: $ ${this.subtotalPrice().toFixed(2)}`,
      [
        {
          text: "Continuar comprando",
          onPress: () => console.log("Ask me later pressed")
        },
        { text: "Pagar", onPress: () => Alert.alert(`Enviando...`, `Gracias por su compra`,) },
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
      ]
    );

	selectHandler = (index, value) => {
		const newItems = [...this.state.cartItems]; // clona el array
		newItems[index]['checked'] = value == 1 ? 0 : 1; // set del nuevo valor
		this.setState({ cartItems: newItems }); // set del nuevo estado
	}
	
	selectHandlerAll = (value) => {
		const newItems = [...this.state.cartItems]; // clona el array
		newItems.map((item, index) => {
			newItems[index]['checked'] = value == true ? 0 : 1; // set del nuevo valor
		});
		this.setState({ cartItems: newItems, selectAll: (value == true ? false : true) }); // set del nuevo estado
	}
	
	deleteHandler = (index) => {
		Alert.alert(
			'¿Esta seguro que desea eliminar este item?',
			'',
			[
				{text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				{text: 'Eliminar', onPress: () => {
					let updatedCart = this.state.cartItems; /* clona el primero */
					updatedCart.splice(index, 1); /* remueve item*/
					this.setState(updatedCart); /* actualiza el state */
				}},
			],
			{ cancelable: false }
		);
	}

	quantityHandler = (action, index) => {
		const newItems = [...this.state.cartItems]; // clona el array

		let currentQty = newItems[index]['qty'];

		if(action == 'more'){
			newItems[index]['qty'] = currentQty + 1;
		} else if(action == 'less'){
			newItems[index]['qty'] = currentQty > 1 ? currentQty - 1 : 1;
		}

		this.setState({ cartItems: newItems }); // set del nuevo estado
	}

	subtotalPrice = () => {
		const { cartItems } = this.state;
		if(cartItems){
			return cartItems.reduce((sum, item) => sum + (item.checked == 1 ? item.qty * item.salePrice : 0), 0 );
		}
		return 0;
	}



	render() {
		const styles = StyleSheet.create({
			centerElement: {justifyContent: 'center', alignItems: 'center'},
		});

		const { cartItems, cartItemsIsLoading, selectAll } = this.state;

		return (
			<View style={{flex: 1, backgroundColor: '#191919',marginTop: 20 }}>
				<View style={{flexDirection: 'row', backgroundColor: '#FBEEE6', marginBottom: 5}}>
					<View style={[styles.centerElement, {width: 90, height: 60}]}>
						<MaterialCommunityIcons name="dog" size={25} color="#000" />
					</View>
					<View style={[styles.centerElement, {height: 60}]}>
						<Text style={{fontSize: 18, color: '#000'}}>PetShop</Text>
					</View>
				</View>


				{cartItemsIsLoading ? (
					<View style={[styles.centerElement, {height: 300}]}>
						<ActivityIndicator size="large" color="#ef5739" />
					</View>
				) : (
					<ScrollView>
						{cartItems && cartItems.map((item, i) => (
							<View key={i} style={{flexDirection: 'row', backgroundColor: '#191919', marginBottom: 35, height: 120}}>
								<View style={[styles.centerElement, {width: 60}]}>
									<TouchableOpacity style={[styles.centerElement, {width: 60, height: 60}]} onPress={() => this.selectHandler(i, item.checked)}>

                                        {/* icono check */}
										<Ionicons name={item.checked == 1 ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"} size={50} color={item.checked == 1 ? "#2089dc" : "#aaaaaa"} />
									</TouchableOpacity>
								</View>
								<View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
									<TouchableOpacity onPress={() => {}} style={{paddingRight: 10}}>

                                        {/* imagen del producto */}
										<Image source={{uri: item.thumbnailImage}} style={[styles.centerElement, {height: 120, width: 90, backgroundColor: '#eeeeee', borderRadius: 10}]} />
									</TouchableOpacity>
									<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>

                                        {/* Nombre del producto */}
										<Text numberOfLines={1} style={{fontSize: 16, color: 'white'}}>{item.name}</Text>

                                        {/* info del producto */}
										<Text numberOfLines={1} style={{color: '#8f8f8f'}}>{item.info ? 'Info: ' + item.info : ''}</Text>

                                        {/* Precio del producto */}
                    <Text numberOfLines={1} style={{color: 'deepskyblue', marginBottom: 10, fontSize: 30}}>${item.qty * item.salePrice}</Text>
										<View style={{flexDirection: 'row'}}>
											<TouchableOpacity onPress={() => this.quantityHandler('less', i)} style={{ borderRadius: 50, borderWidth: 1, borderColor: 'deepskyblue', paddingHorizontal: 10}}>

                                                {/* Restar item */}
												<MaterialIcons name="remove" size={25} color="deepskyblue" />
											</TouchableOpacity>

                                            {/* Numero de items, por defecto puse 1 asi si seleciona el check cuenta el primer producto */}
											<Text style={{ borderTopWidth: 1, borderBottomWidth: 1, borderRadius: 50, borderWidth: 1, borderColor: 'deepskyblue', paddingHorizontal: 10, paddingTop: 3, color: 'deepskyblue', fontSize: 20, fontWeight: 'bold' }}>{item.qty}</Text>
											<TouchableOpacity onPress={() => this.quantityHandler('more', i)} style={{ borderRadius: 50, borderWidth: 1, borderColor: 'deepskyblue', paddingHorizontal: 10}}>

                                                {/* Agregar item */}
												<MaterialIcons name="add" size={25} color="deepskyblue" />
											</TouchableOpacity>
										</View>
									</View>

								</View>

                                {/* Remover item -  es el tachito de basura del delete */}
								<View style={[styles.centerElement, {width: 50}]}>
									<TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} onPress={() => this.deleteHandler(i)}>
										<Ionicons name="md-trash" size={25} color="#ee4d2d" />
									</TouchableOpacity>
								</View>
							</View>
						))}
					</ScrollView>
				)}

                                {/* Esto es el footer q esta fixeado para que no se mueva */}
				{!cartItemsIsLoading &&
					<View style={{backgroundColor: '#FBEEE6', borderTopWidth: 2, borderColor: '#f6f6f6', paddingVertical: 5}}>
						<View style={{flexDirection: 'row'}}>

                            {/* icono del codigo de descuento */}
							<View style={[styles.centerElement, {width: 60}]}>
								<View style={[styles.centerElement, {width: 32, height: 32}]}>
									<MaterialCommunityIcons name="check-decagram" size={25} color="green" />
								</View>
							</View>
							<View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center'}}>
								<Text>Codigo descuento</Text>
								<View style={{paddingRight: 20}}>
									<TextInput
										style={{paddingHorizontal: 10, backgroundColor: '#f0f0f0', height: 25, borderRadius: 4, borderColor: 'gray',
                                        borderWidth: 1}}
										placeholder="Codigo de descuento"
										value={''}
										onChangeText={(searchKeyword) => {
										} }
									/>
								</View>
							</View>
						</View>
						<View style={{flexDirection: 'row'}}>
							<View style={[styles.centerElement, {width: 60}]}>
								<TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} onPress={() => this.selectHandlerAll(selectAll)}>
									<Ionicons name={selectAll == true ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"} size={25} color={selectAll == true ? "#2089dc" : "#aaaaaa"} />
								</TouchableOpacity>
							</View>
							<View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center'}}>
								<Text>Seleccionar Todo</Text>
								<View style={{flexDirection: 'row', paddingRight: 20, alignItems: 'center'}}>
									<Text style={{color: '#8f8f8f'}}>SubTotal: </Text>
									<Text style={{color: 'black', fontSize: 25}}>${this.subtotalPrice().toFixed(2)}</Text>
								</View>
							</View>
						</View>
						<View style={{flexDirection: 'row', justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'center'}}>
							<TouchableOpacity style={[styles.centerElement, {backgroundColor: '#2089dc', width: 100, height: 25, borderRadius: 5}]} onPress={this._onPressButton}>
								<Text style={{color: '#ffffff'}} >Comprar</Text>

							</TouchableOpacity>
						</View>
					</View>
				}
			</View>
		);
	}
}
