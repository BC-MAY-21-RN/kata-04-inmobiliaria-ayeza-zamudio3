/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { Text, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../assets/style';

const Card = ({name,image,score,address,bedrooms,bathrooms,measure,price}) => {
    const [liked, setLiked] = useState(false);

    return (
        <View style={style.card}>
            <View>
                <Image style={style.imageCard} source={{ uri: image}}/>
                <View style={style.score}>
                    <Icon  style={style.iconScore} name="star" />
                    <Text style={style.scoreText}> {score}</Text>
                </View>
            </View>
            <View style={style.infoCard}>
                <Text style={style.nameProperty}>{name}</Text>
                <View style={style.address}>
                    <Icon style={style.icon} name="place" />
                    <Text style={style.addressName}>{address}</Text>
                </View>
                <View style={style.dscpt}>
                    <Icon style={style.icon} name="king-bed" />
                    <Text style={style.dscptText}>{bedrooms}</Text>
                    <Icon style={style.icon} name="bathtub" />
                    <Text style={style.dscptText}>{bathrooms}</Text>
                    <Icon style={style.icon} name="rounded-corner" />
                    <Text style={style.dscptText}>{measure}</Text>
                </View>
                <View style={style.priceNotLike}>
                    <Text style={style.priceText}>{price}</Text>
                    <View style={style.circleIcon}>
                        <Icon style={style.iconLike} name="favorite" color = {liked ? '#bd081c' : '#ffffff'}
                                onPress={()=> setLiked(!liked)} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Card;
