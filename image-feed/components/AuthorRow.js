import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Avatar from './Avatar';
import getAvatarColor from '../utils/getAvatarColor';
import getInitials from '../utils/getInitials';

const AuthorRow = ( { fullname, linkText, onPressLinkText } ) => {
	return (
		<View style={ styles.container }>
			<Avatar
				backgroundColor={ getAvatarColor( fullname ) }
				initials={ getInitials( fullname ) }
				size={ 35 }
			/>
			<Text style={ styles.text } numberOfLines={ 1 }>{ fullname }</Text>
			{
				!! linkText && (
					<TouchableOpacity onPress={ onPressLinkText }>
						<Text numberOfLines={ 1 }>{ linkText }</Text>
					</TouchableOpacity>
				)
			}
		</View>
	)
};

const styles = StyleSheet.create( {
	container: {
		alignItems: 'center',
		flexDirection: 'row',
		height: 50,
		paddingHorizontal: 10,
	},
	text: {
		flex: 1,
		marginHorizontal: 6,
	},
} );

AuthorRow.propTypes = {
	fullname: PropTypes.string.isRequired,
	linkText: PropTypes.string.isRequired,
	onPressLinkText: PropTypes.func.isRequired,
};

export default AuthorRow;