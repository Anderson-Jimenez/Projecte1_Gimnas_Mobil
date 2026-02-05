import { StyleSheet } from "react-native";

export default StyleSheet.create({

  flexContainer: {
    flex: 1,
    alignItems: 'center',
  },

  /////////////////////////////////   HEADER

  header: {
    backgroundColor: '#1a222e',
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  welcomeText: { 
    color: '#888', 
    fontSize: 14 
  },

  userName: { 
    color: '#fff', 
    fontSize: 22, 
    fontWeight: 'bold' 
  },

  profilePic: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    borderWidth: 2, 
    borderColor: '#ff6b6b' 
  },


  /////////////////////////////////   FOOTER

  navbar: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    paddingVertical: 15, 
    backgroundColor: '#fff', 
    borderTopWidth: 1, 
    borderColor: '#eee'
  }

  
});