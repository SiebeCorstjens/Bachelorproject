using System.Drawing;

namespace FestiTimer.Identity.Data.Libraries
{
    public static class BitmapResizer
    {
        public static Bitmap Resize(Bitmap image, int maxWidth, int maxHeight)
        {
            if (maxHeight <= 0 || maxWidth <= 0) return image;
            var width = image.Width;
            var height = image.Height;
            var ratioBitmap = width / (float)height;
            var ratioMax = maxWidth / (float)maxHeight;

            var finalWidth = maxWidth;
            var finalHeight = maxHeight;
            if (ratioMax > ratioBitmap)
            {
                finalWidth = (int)(maxHeight * ratioBitmap);
            }
            else
            {
                finalHeight = (int)(maxWidth / ratioBitmap);
            }
            return new Bitmap(image, finalWidth, finalHeight);
        }
    }
}
