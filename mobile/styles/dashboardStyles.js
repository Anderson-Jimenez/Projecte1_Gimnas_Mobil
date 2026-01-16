import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f0f2f5' 
  },

  reservesBtn: {
    backgroundColor: '#ff6b6b',
    margin: 20,
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5, // Ombra en Android
    shadowColor: '#ff6b6b', // Ombra en iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  iconContainer: { 
    backgroundColor: '#fff', 
    padding: 8, 
    borderRadius: 10, 
    marginRight: 15 },

  reservesBtnText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16 
  },

  sectionHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    marginTop: 10, 
    alignItems: 'center' 
  },

  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#1a222e' 
  },

  sectionLink: { 
    color: '#ff6b6b', 
    fontSize: 12 
  },

  chartPlaceholder: { 
    backgroundColor: '#fff', 
    height: 200, 
    margin: 20, 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },

  classCard: {
    backgroundColor: '#1a222e',
    margin: 20,
    borderRadius: 25,
    padding: 20
  },

  classHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },

  tag: { 
    backgroundColor: '#3d2b30', 
    paddingHorizontal: 10, 
    paddingVertical: 4, 
    borderRadius: 8 
  },

  tagText: { color: '#ff6b6b', 
    fontSize: 10, 
    fontWeight: 'bold' 
  },

  timeBadge: { 
    backgroundColor: '#323a45', 
    padding: 8, 
    borderRadius: 12 
  },

  timeText: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },

  className: { 
    color: '#fff', 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginTop: 10 
  },

  instructor: { 
    color: '#aaa', 
    marginBottom: 15 
  },

  classInfoRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 20 
  },

  infoItem: { 
    color: '#fff', 
    fontSize: 12 
  },

  cancelBtn: { 
    backgroundColor: '#ff6b6b', 
    padding: 15, 
    borderRadius: 12, 
    alignItems: 'center' 
  },

  cancelBtnText: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },

  quickActions: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 20 
  },

  actionCardWhite: { 
    backgroundColor: '#fff', 
    width: '48%', 
    borderRadius: 20, 
    padding: 20, 
    elevation: 2 
  },

  actionCardRed: { 
    backgroundColor: '#ff6b6b', 
    width: '48%', 
    borderRadius: 20, 
    padding: 20, 
    elevation: 5 
  },

  actionIconGray: { 
    backgroundColor: '#f0f2f5', 
    width: 40, 
    height: 40, 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 10 
  },

  actionIconWhite: { 
    backgroundColor: 'rgba(255,255,255,0.3)', 
    width: 40, 
    height: 40, 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 10 
  },

  actionTitle: { 
    fontWeight: 'bold', 
    color: '#1a222e' 
  },

  actionSub: { 
    fontSize: 11, 
    color: '#999' 
  },

  actionTitleWhite: { 
    fontWeight: 'bold', 
    color: '#fff' 
  },

  actionSubWhite: { 
    fontSize: 11, 
    color: '#f0f0f0' 
  },
  
});