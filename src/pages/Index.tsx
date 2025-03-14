
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { Check, ChevronsUpDown, Search, ExternalLink, ShieldCheck, Clock, Smartphone, Globe } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [openSheet, setOpenSheet] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState("buttons");
  
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Tailwind Components</h1>
          <p className="text-xl opacity-90">A showcase of beautiful UI components built with Tailwind CSS</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue={selectedFeature} onValueChange={setSelectedFeature} className="mb-8">
          <TabsList className="grid grid-cols-4 md:grid-cols-7 mb-4">
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="tables">Tables</TabsTrigger>
            <TabsTrigger value="dialogs">Dialogs</TabsTrigger>
            <TabsTrigger value="sheets">Sheets</TabsTrigger>
            <TabsTrigger value="commands">Command</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
          </TabsList>
          
          <TabsContent value="buttons" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Button Variants</CardTitle>
                  <CardDescription>Different button styles for various use cases</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Button Sizes</CardTitle>
                  <CardDescription>Buttons available in different sizes</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-4 items-center">
                    <Button size="lg">Large</Button>
                    <Button>Default</Button>
                    <Button size="sm">Small</Button>
                  </div>
                  <div className="flex flex-wrap gap-4 items-center">
                    <Button size="icon" variant="outline"><Check /></Button>
                    <Button size="icon" variant="secondary"><Search /></Button>
                    <Button size="icon" variant="ghost"><ChevronsUpDown /></Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="cards" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="overflow-hidden">
                <CardHeader className="bg-primary/5">
                  <CardTitle>Feature Card</CardTitle>
                  <CardDescription>A card highlighting key features</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">Secure</h4>
                        <p className="text-sm text-muted-foreground">End-to-end encryption and security</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">Fast</h4>
                        <p className="text-sm text-muted-foreground">Optimized for speed and performance</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t bg-muted/20 px-6 py-4">
                  <Button variant="ghost" size="sm">Learn more</Button>
                  <Button size="sm">Get Started</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Pricing Card</CardTitle>
                  <CardDescription>Standard plan details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">$19</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">5 team members</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">10GB storage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Basic support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Choose Plan</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <img 
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&auto=format&fit=crop&q=60" 
                  alt="City skyline" 
                  className="w-full h-40 object-cover"
                />
                <CardHeader>
                  <CardTitle>Media Card</CardTitle>
                  <CardDescription>Cards with image content</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Cards can include images, videos or other media to enhance visual appeal
                    and provide additional context to your content.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost">Share</Button>
                  <Button variant="outline">View</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="tables" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Data Table</CardTitle>
                <CardDescription>Display tabular data with Tailwind styling</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Alex Johnson</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          Active
                        </span>
                      </TableCell>
                      <TableCell>Developer</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Sarah Miller</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                          Away
                        </span>
                      </TableCell>
                      <TableCell>Designer</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Michael Brown</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                          Offline
                        </span>
                      </TableCell>
                      <TableCell>Manager</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="dialogs" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Dialog Component</CardTitle>
                  <CardDescription>Modal dialogs for focused interactions</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Confirmation Required</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to proceed with this action? This cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <p className="text-sm text-muted-foreground">
                          By confirming, you agree to our terms and conditions regarding this action.
                        </p>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button>Confirm</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Alert Dialogs</CardTitle>
                  <CardDescription>Important notifications requiring user attention</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="destructive">Delete Item</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Delete Confirmation</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently delete your account
                          and remove your data from our servers.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className="gap-2 sm:gap-0">
                        <Button variant="outline">Cancel</Button>
                        <Button variant="destructive">Delete</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="sheets" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sheet Component</CardTitle>
                <CardDescription>Side-opening panels for additional content or actions</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Sheet open={openSheet} onOpenChange={setOpenSheet}>
                  <SheetTrigger asChild>
                    <Button>Open Sheet</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Edit Profile</SheetTitle>
                      <SheetDescription>
                        Make changes to your profile settings here. Click save when you're done.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="py-6 space-y-4">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Bio</h4>
                        <Textarea 
                          placeholder="Tell us about yourself" 
                          className="resize-none"
                          defaultValue="I'm a software developer with 5 years of experience in web development and design."
                        />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Notifications</h4>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="email-notifications" className="rounded border-gray-300 text-primary focus:ring-primary" />
                          <label htmlFor="email-notifications" className="text-sm">Email notifications</label>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2 mt-6">
                      <Button variant="outline" onClick={() => setOpenSheet(false)}>Cancel</Button>
                      <Button onClick={() => setOpenSheet(false)}>Save changes</Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="commands" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Command Component</CardTitle>
                <CardDescription>Command palette for quick navigation and actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Command>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup heading="Suggestions">
                        <CommandItem className="cursor-pointer">
                          <Smartphone className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                        </CommandItem>
                        <CommandItem className="cursor-pointer">
                          <Search className="mr-2 h-4 w-4" />
                          <span>Search</span>
                        </CommandItem>
                        <CommandItem className="cursor-pointer">
                          <Globe className="mr-2 h-4 w-4" />
                          <span>Dashboard</span>
                        </CommandItem>
                      </CommandGroup>
                      <CommandGroup heading="Settings">
                        <CommandItem className="cursor-pointer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          <span>Account</span>
                        </CommandItem>
                        <CommandItem className="cursor-pointer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          <span>Billing</span>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="forms" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Form Elements</CardTitle>
                  <CardDescription>Styled form components with Tailwind</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input
                      id="name"
                      type="text"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      className="resize-none"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Submit</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Custom Checkboxes</CardTitle>
                  <CardDescription>Styled checkbox options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="items-top flex space-x-2">
                    <input
                      type="checkbox"
                      id="terms1"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="terms1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Accept terms and conditions
                      </label>
                      <p className="text-sm text-muted-foreground">
                        You agree to our Terms of Service and Privacy Policy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="option1"
                      name="option"
                      className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="option1" className="text-sm">Option 1</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="option2"
                      name="option"
                      className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="option2" className="text-sm">Option 2</label>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Tailwind Components Showcase — Built with Tailwind CSS and shadcn/ui</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
