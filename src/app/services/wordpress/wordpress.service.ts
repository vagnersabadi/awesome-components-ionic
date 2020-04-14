import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  url = 'https://hackaday.com/wp-json'; // Your wordpress base URL
  apiKey = ''; // <-- Enter your own key here if required!

  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }

  /**
  * Get data from wordpress 
  * map the result to return only the results that we need
  * 
  * @returns Observable with the blogs results
  */
  getBlogs(): Observable<any> {
    return this.http.get(`${this.url}/wp/v2/posts`).pipe(
      map(results => results)
    );;
  }

  /**
  * Get the detailed information for an ID using the "i" parameter
  * 
  * @param {string} id imdbID to retrieve information
  * @returns Observable with detailed information
  */
  getBlogDetail(id) {
    return this.http.get(`${this.url}/wp/v2/posts/${id}`);
  }

  /**
  * Get all images from WP media
  * 
  * @returns Observable with detailed information
  */
  getMedia() {
    return this.http.get(`${this.url}/wp/v2/media`);
  }

  /**
  * Get the image for a blog post
  * 
  * @returns Observable with detailed information
  */
  getImage(id) {
    console.log('id', id)
    return this.http.get(`${this.url}/wp/v2/media/${id}`);
  }

  /**
  * Get all tags from Wordpress
  * 
  * @returns Observable with detailed information
  */
  getTags() {
    return this.http.get(`${this.url}/wp/v2/tags`);
  }

  /**
  * Get user information by ID
  * 
  * @returns Observable with detailed information
  */
  getUser(id) {
    return this.http.get(`${this.url}/wp/v2/users/${id}`);
  }
}