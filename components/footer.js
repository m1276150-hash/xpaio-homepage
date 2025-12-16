export default function Footer() {
  return (
    <footer className="bg-background text-textPrimary py-6 mt-12 border-t border-neonBlue">
      <div className="text-center space-y-2">
        <p>© 2025 XPAIO Project. All rights reserved.</p>
        <div className="space-x-4">
          <a href="https://twitter.com" className="text-neonBlue hover:underline">Twitter</a>
          <a href="https://github.com" className="text-neonPurple hover:underline">GitHub</a>
          <a href="mailto:contact@xpaio.com" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}