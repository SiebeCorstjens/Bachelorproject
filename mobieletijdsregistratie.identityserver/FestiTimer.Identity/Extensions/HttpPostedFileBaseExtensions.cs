using Microsoft.AspNetCore.Http;
using System;
using System.IO;

namespace FestiTimer.Identity.Extensions
{
    public static class HttpPostedFileBaseExtensions
    {
        public static bool IsImage(this IFormFile postedFile)
        {
            //-------------------------------------------
            //  Check the image mime types
            //-------------------------------------------
            if (!string.Equals(postedFile.ContentType, "image/jpg", StringComparison.OrdinalIgnoreCase) &&
                !string.Equals(postedFile.ContentType, "image/jpeg", StringComparison.OrdinalIgnoreCase) &&
                !string.Equals(postedFile.ContentType, "image/pjpeg", StringComparison.OrdinalIgnoreCase) &&
                !string.Equals(postedFile.ContentType, "image/gif", StringComparison.OrdinalIgnoreCase) &&
                !string.Equals(postedFile.ContentType, "image/x-png", StringComparison.OrdinalIgnoreCase) &&
                !string.Equals(postedFile.ContentType, "image/png", StringComparison.OrdinalIgnoreCase))
            {
                return false;
            }

            //-------------------------------------------
            //  Check the image extension
            //-------------------------------------------
            var postedFileExtension = Path.GetExtension(postedFile.FileName);
            return string.Equals(postedFileExtension, ".jpg", StringComparison.OrdinalIgnoreCase) || string.Equals(postedFileExtension, ".png", StringComparison.OrdinalIgnoreCase) || string.Equals(postedFileExtension, ".gif", StringComparison.OrdinalIgnoreCase) || string.Equals(postedFileExtension, ".jpeg", StringComparison.OrdinalIgnoreCase);
        }
    }
}
