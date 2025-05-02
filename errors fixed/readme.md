# 🚀 Node-PTY Troubleshooting Guide  

> **Task of the Day:** *Solved my 3rd Node.js PTY error!* ✅  

---

## 📸 Screenshots  

### (a) Terminal Error Encountered  
![Permission Denied Error](./Screenshot%20From%202025-05-02%2010-19-27.png)  
*`EACCES` error when installing `node-gyp`*  

### (b) Node-PTY Multi-Arch Solution  
![node-pty-prebuilt-multiarch](./Screenshot%20From%202025-05-02%2010-20-30.png)  
*Switched to `node-pty-prebuilt-multiarch` for cross-platform support*  

### (c) Meme: The Struggle is Real 😅  
![Meme: "When `npm install` fails for the 10th time"](https://i.imgflip.com/7w3x0k.jpg)  

---

## 🔧 Problem & Fix  

### **Error:**  
- `EACCES: Permission denied` when running `npm install -g node-gyp`  
- `node-pty` failed to build on Fedora 42  

### **Solution:**  
✅ **Used `node-pty-prebuilt-multiarch`** – A maintained fork with prebuilt binaries!  
✅ **Fixed permissions** – Used `sudo` (carefully!) or `npm config set prefix ~/.npm-global`  
✅ **Installed dependencies:**  
   ```bash
   sudo dnf install -y make gcc g++ python3 libsecret-devel libX11-devel