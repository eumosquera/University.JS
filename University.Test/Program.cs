using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using University.BL.Models;
using University.BL.Repositories;
using University.BL.Repositories.Implements;
using University.Test;

namespace ConsoleApp1
{
    internal class Program
    {

        private static readonly UniversityModel university = new UniversityModel();
        private static readonly ICourseRepository courseRepository
            = new CourseRepository(new UniversityModel());

        static void Main(string[] args)
        {

            /*var courses = university.Course.ToList();
            var courses2 = courseRepository.GetAll().Result;
            foreach (var item in courses2)
            {

                Console.WriteLine($"{item.Title} { item.Credits}");

            }*/




            // Mostrar en consola el autor y la cantidad de libros publicados.



            var books = Book.Books();

            var authors = Author.Authors();

            //Mostrar en consola los 3 libros con más ventas
            var salesTop = books.OrderByDescending(x => x.Sales).Take(3).ToList();
            Console.WriteLine("----3 best selling books----");
            foreach (var item in salesTop)
            {

                Console.WriteLine($"{item.Title} - {item.Sales}");

            }

            //Mostrar en consola los 3 libros con menos ventas.
            var salesDown = books.OrderBy(x => x.Sales).Take(3).ToList();
            Console.WriteLine("----3 least sold books----");
            foreach (var item in salesDown)
            {

                Console.WriteLine($" {item.Title} - {item.Sales}");

            }


            //Mostrar en consola el autor con más libros publicados.
            var ex3 = from b in books
                      join a in authors on b.AuthorId equals a.AuthorId
                      group a by (a.AuthorId, a.Name) into query
                      orderby query.Count() descending
                      select query;
            Console.WriteLine("----autor more book public----");
            var resultex3 = ex3.FirstOrDefault();

            Console.WriteLine($"{resultex3.Key.AuthorId} -{resultex3.Key.Name} - {resultex3.Count()}");

            //Mostrar en consola los libros publicados hace menos de 50 años.
            var book50 = books.Where(x => x.PublicationDate > DateTime.Now.AddYears(-50).Year).ToList();
            Console.WriteLine("---Books less than 50y ago---");
            foreach (var item in book50)
            {
                Console.WriteLine($" {item.Title} - {item.AuthorId} - {item.PublicationDate} ");
            }

            //Mostrar en consola el libro más viejo.
            var Olderbook = books.OrderBy(x => x.PublicationDate).Take(1).ToList();
            Console.WriteLine("----Older book----");
            foreach (var item in Olderbook)
            {
                Console.WriteLine($" {item.Title} - {item.PublicationDate}");

            }

            //Mostrar en consola los autores que tengan un libro que comience con 'El' */
            var Elbooks = from bookName in books
                          join authorName in authors on bookName.AuthorId equals authorName.AuthorId
                          where bookName.Title.StartsWith("El")
                          select bookName;
            Console.WriteLine("----Libros que empiecen con El----");
            foreach (var item in Elbooks)
            {
                Console.WriteLine($" {item.Title}");
            }



            Console.ReadKey();

        }
    }
}
