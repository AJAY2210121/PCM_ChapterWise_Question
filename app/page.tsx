import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChapterList } from "@/components/ChapterList";
import { FilterBar } from "@/components/FilterBar";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">JEE Question Bank</h1>
          <ThemeToggle />
        </div>

        <Tabs defaultValue="physics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="physics">Physics</TabsTrigger>
            <TabsTrigger value="chemistry">Chemistry</TabsTrigger>
            <TabsTrigger value="mathematics">Mathematics</TabsTrigger>
          </TabsList>

          <FilterBar />

          <TabsContent value="physics" className="space-y-4">
            <ChapterList subject="physics" />
          </TabsContent>
          
          <TabsContent value="chemistry" className="space-y-4">
            <ChapterList subject="chemistry" />
          </TabsContent>
          
          <TabsContent value="mathematics" className="space-y-4">
            <ChapterList subject="mathematics" />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}