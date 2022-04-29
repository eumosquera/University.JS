
using System.Collections.Generic;
using University.BL.DTOs;
using University.BL.Models;

namespace University.BL.Repositories
{
    public interface ICourseRepository : IGenericRepository<Course>
    {

        IEnumerable<Course> GetCoursesByInstructor(int InstructorID);
        IEnumerable<DonutExampleDTO> GetReport();
        IEnumerable<DonutExampleDTO> GetReport2();
    }
}
