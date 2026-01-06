import {resolve} from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

 build:{
	  rollupOptions:{
		  input:{
			  main:resolve("./","index.html"),
			  About:resolve("./","about.html"),
			  Service:resolve("./","service.html"),
			  workers:resolve("./","service.html")
		  },
	  },
  },
  plugins: [react()]
})
