import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 20
  },

  avatarContainer: {
    alignItems: 'center',
    marginTop: 20
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55
  },

  statusDot: {
    position: 'absolute',
    bottom: 8,
    right: 120 / 2 - 10,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#FFF'
  },

  name: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 12
  },

  subtitle: {
    textAlign: 'center',
    color: '#999',
    marginBottom: 20
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30
  },

  statItem: {
    alignItems: 'center',
    flex: 1
  },

  statNumber: {
    fontSize: 18,
    fontWeight: '700'
  },

  statLabel: {
    fontSize: 12,
    color: '#777',
    marginTop: 4
  },

  red: {
    color: '#FF4D4D'
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12
  },

  inputBox: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10
  },

  inputLabel: {
    fontSize: 12,
    color: '#999'
  },

  inputValue: {
    fontSize: 14,
    marginTop: 4
  },

  optionRow: {
    backgroundColor: '#FFF',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10
  },

  optionText: {
    fontSize: 14
  },

  logoutText: {
    fontSize: 14,
    color: '#FF4D4D'
  },

  saveButton: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20
  },

  saveButtonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16
  }

});